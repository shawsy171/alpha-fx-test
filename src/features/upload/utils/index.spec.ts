import { describe, it, expect } from 'vitest'
import { isValid } from './index'

describe('upload utils', () => {
  it('should return true when there is a string input', () => {
    const result = isValid('test')
    expect(result).toBeTruthy()
  })

  it('should return false when there is an empty string input', () => {
    const result = isValid('')
    expect(result).toBeFalsy()
  })
})