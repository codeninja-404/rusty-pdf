use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

#[wasm_bindgen]
pub struct PdfEngine {
    data: Vec<u8>,
}

#[wasm_bindgen]
impl PdfEngine {
    /// Fetch PDF from URL and return a PdfEngine instance
    #[wasm_bindgen]
    pub async fn load_from_url(url: String) -> Result<PdfEngine, JsValue> {
        let opts = RequestInit::new();
        opts.set_method("GET");
        opts.set_mode(RequestMode::Cors);

        let request = Request::new_with_str_and_init(&url, &opts)?;
        let window = web_sys::window().ok_or("No window found")?;
        let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
        let resp: Response = resp_value.dyn_into()?;

        let buffer = JsFuture::from(resp.array_buffer()?).await?;
        let bytes = js_sys::Uint8Array::new(&buffer).to_vec();

        Ok(PdfEngine { data: bytes })
    }

    /// Get the raw PDF bytes for download
    #[wasm_bindgen]
    pub fn get_file_bytes(&self) -> Vec<u8> {
        self.data.clone()
    }

    /// Render a page to canvas (stub - actual rendering requires PDFium or similar)
    #[wasm_bindgen]
    pub fn render_page_to_canvas(&self, _page_num: u32, _canvas_id: &str) -> Result<(), JsValue> {
        // In a real implementation, this is where 'pdfium' or 'pdf-rs'
        // would draw pixels to the canvas context.
        Ok(())
    }

    /// Get total page count (placeholder)
    #[wasm_bindgen]
    pub fn get_page_count(&self) -> u32 {
        // Placeholder: parse PDF trailer to get count
        10
    }
}
