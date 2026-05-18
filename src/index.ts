/**
 * @amlplugins/stability-video
 *
 * Thin namespaced re-export of the native stability-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Stability AI Video — Image-to-Video diffusion generation with motion-bucket steering.
 */

import * as _sdk from "stability-ai";
export * from "stability-ai";
export { _sdk as sdk };
export default _sdk;
