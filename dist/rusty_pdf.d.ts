/* tslint:disable */
/* eslint-disable */

export class PdfEngine {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Fetch PDF from URL and return a PdfEngine instance
   */
  static load_from_url(url: string): Promise<PdfEngine>;
  /**
   * Get the raw PDF bytes for download
   */
  get_file_bytes(): Uint8Array;
  /**
   * Get total page count (placeholder)
   */
  get_page_count(): number;
  /**
   * Render a page to canvas (stub - actual rendering requires PDFium or similar)
   */
  render_page_to_canvas(_page_num: number, _canvas_id: string): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_pdfengine_free: (a: number, b: number) => void;
  readonly pdfengine_get_file_bytes: (a: number) => [number, number];
  readonly pdfengine_get_page_count: (a: number) => number;
  readonly pdfengine_load_from_url: (a: number, b: number) => any;
  readonly pdfengine_render_page_to_canvas: (a: number, b: number, c: number, d: number) => [number, number];
  readonly wasm_bindgen__convert__closures_____invoke__hdb66b1aeeed8926d: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h9294e17568f504ba: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h3f9c308616cbc354: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
