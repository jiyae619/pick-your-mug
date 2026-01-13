import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true // Required for frontend use
});

export async function generateCafeMatches(userModes, cafes) {
  const systemPrompt = `You are a cafe matching expert for Seattle coffee shops.
Analyze user preferences and recommend cafes that best match their needs.

Consider:
- Tag alignment between modes and cafe tags
- Semantic meaning (e.g., "Work" relates to "Laptop Friendly", "Quiet Space", "Fast WiFi")
- Quality indicators (rating, reviews)
- Distance and convenience
- Unique attributes that make each cafe special

Return JSON array with match scores (0-100) and brief explanations.`;

  const userPrompt = `User Modes: ${userModes.join(', ')}

Cafes:
${JSON.stringify(cafes, null, 2)}

For each cafe, provide:
1. Match score (0-100, where 100 is perfect match)
2. Brief explanation (1-2 sentences) why it matches the user's modes

Return ONLY valid JSON in this exact format:
{
  "matches": [
    {"cafeId": "1", "score": 85, "explanation": "This cafe is perfect for your needs because..."}
  ]
}`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      messages: [{ role: 'user', content: userPrompt }],
      system: systemPrompt
    });

    const responseText = message.content[0].text;
    const parsed = JSON.parse(responseText);

    return parsed.matches;
  } catch (error) {
    console.error('AI matching error:', error);
    throw error;
  }
}
