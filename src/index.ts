const str = {
  ellipsis: (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...'
    }

    return text
  }
}

export default str
