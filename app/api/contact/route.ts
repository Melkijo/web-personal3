export async function POST() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyDwV9gdiA6QUP_HqF46rNNkKzPrfZ8Z1tx1C4G-aNYEPsXqLS7DuRa-MxvXoB5gFYipA/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }