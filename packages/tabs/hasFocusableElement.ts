export function hasFocusableElement(html: string) {
  const focusableRegex =
    /<a\s+[^>]*href=["'][^"']*["'][^>]*>|<input\s+(?!type=["']hidden["'])[^>]*>|<select\s+[^>]*>|<textarea\s+[^>]*>|<button\s+[^>]*(?!disabled)[^>]*>|<iframe\s+[^>]*>|<object\s+[^>]*>|<embed\s+[^>]*>|<audio\s+[^>]*controls[^>]*>|<video\s+[^>]*controls[^>]*>|<summary\s+[^>]*>|tabindex=["']?\d+["']?|contenteditable=["']?(true|["'])?|role=["']?(button|link|checkbox|radio|tab|switch|menuitem)["']?/i;

  return focusableRegex.test(html);
}
