export async function copy(text: string, label = 'Copied') {
  try { await navigator.clipboard.writeText(text) }
  catch { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove() }
  window.dispatchEvent(new CustomEvent('toast', { detail: label }))
}
