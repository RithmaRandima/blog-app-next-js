export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>hi</h1>
      <p>ID: {id}</p>
    </div>
  );
}
