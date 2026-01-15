'use server'

export async function submitRSVP(formData: FormData) {
  const email = formData.get('email'); // Matches the input 'name' attribute

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Table%201`, // Use 'Table%201' if that is your table name
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Email: email, // Must match your column name in Airtable exactly
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable Error:', errorData);
      return { success: false, error: 'Airtable error' };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: 'Server error' };
  }
}