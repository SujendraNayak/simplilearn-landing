'use server'

export async function submitRSVP(formData: FormData) {
  const email = formData.get('email');

  if (!email) {
    return { error: 'Email required' };
  }

  try {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/RSVPs`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Email: email, // Ensure this matches your Airtable column name
          },
        }),
      }
    );

    if (!airtableRes.ok) {
      return { error: 'Airtable error' };
    }

    return { success: true };
  } catch (err) {
    return { error: 'Server error' };
  }
}