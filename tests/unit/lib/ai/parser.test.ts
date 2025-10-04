import { describe, it, expect } from 'vitest'

// Sample utility functions for testing
export function extractBrandMentions(response: string, brand: string) {
  const count = (response.match(new RegExp(brand, 'gi')) || []).length
  const positions: number[] = []
  
  const sentences = response.split('.')
  sentences.forEach((sentence, index) => {
    if (sentence.toLowerCase().includes(brand.toLowerCase())) {
      positions.push(index)
    }
  })
  
  return { count, positions }
}

export function calculateSentiment(text: string): number {
  // Simple mock sentiment calculation
  const positiveWords = ['best', 'great', 'excellent', 'good', 'amazing']
  const negativeWords = ['bad', 'poor', 'worst', 'terrible', 'awful']
  
  const words = text.toLowerCase().split(/\s+/)
  let score = 0
  
  words.forEach(word => {
    if (positiveWords.includes(word)) score += 0.2
    if (negativeWords.includes(word)) score -= 0.2
  })
  
  return Math.max(-1, Math.min(1, score))
}

// Tests
describe('AI Response Parser', () => {
  it('should extract brand mentions from response', () => {
    const response = "According to Acme Corp, the best solution is Acme Corp products."
    const mentions = extractBrandMentions(response, 'Acme Corp')
    
    expect(mentions.count).toBe(2)
    expect(mentions.positions).toContain(0)
  })
  
  it('should be case insensitive', () => {
    const response = "ACME CORP is the leader. acme corp is great."
    const mentions = extractBrandMentions(response, 'Acme Corp')
    
    expect(mentions.count).toBe(2)
  })
  
  it('should calculate positive sentiment', () => {
    const text = "This is the best and most excellent solution"
    const score = calculateSentiment(text)
    
    expect(score).toBeGreaterThan(0)
  })
  
  it('should calculate negative sentiment', () => {
    const text = "This is the worst and most terrible solution"
    const score = calculateSentiment(text)
    
    expect(score).toBeLessThan(0)
  })
  
  it('should calculate neutral sentiment', () => {
    const text = "This is a solution that exists"
    const score = calculateSentiment(text)
    
    expect(score).toBe(0)
  })
})
