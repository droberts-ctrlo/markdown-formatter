import { marked } from "marked"

export type stringLike = { toString(): string }

/**
 * Markdown formatter
 * @param strings The template strings
 * @param values The values to be formatted
 * @returns The formatted string
 */
export function Markdown(strings: TemplateStringsArray, ...values: (string | number | stringLike)[]) {
  marked.use({ async: false, breaks: true })
  let str = ""
  for (let i = 0; i < strings.length; i++) {
    str += strings[i]
    if (i < values.length) {
      str += "string" == typeof values[i] ? values[i] : "number" == typeof values[i] ? String(values[i]) : values[i].toString()
    }
  }
  str = str.replace("/^\s+", "")
    .replace(/^[\r\n]+/g, "\n\n")
    .replace(/\s+$/g, "")
    .trim()
  return (marked(str) as string).trim()
}
