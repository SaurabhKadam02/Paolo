function Details({ title ,text }) {
  return (
    <details className="w-96 p-4 border-2 border-black">
      <summary className="font-medium cursor-pointer">{title}</summary>
      <p>{text}</p>
    </details>
  );
}

export default Details;