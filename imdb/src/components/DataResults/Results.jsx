export function Results({ results }) {
  return (
    <div>
      {results.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
