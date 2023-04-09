export default async function FetchData(url) {
  try {
    const q = await fetch(url);
    return q.json();
  } catch (e) {
    console.log(e);
    return {};
  }
}
