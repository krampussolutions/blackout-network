export async function POST(request) {
  const formData = await request.formData();
  const payload = {
    email: formData.get('email')
  };

  return Response.json({
    ok: true,
    message: 'You are on the list. Thanks for signing up.',
    payload
  });
}
