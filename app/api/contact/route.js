export async function POST(request) {
  const formData = await request.formData();
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  return Response.json({
    ok: true,
    message: 'Thanks for reaching out. Your message has been received.',
    payload
  });
}
