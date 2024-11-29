export const getDayInput = async (title: string) => {
  const query = `query PuzzleInput($title:String!) {
    puzzleInput(where: {title: $title}) {
      title,
      inputData {
        markdown
      }
    }
  }`;

  console.log("query: ", query);
  const response = await fetch(
    "https://eu-west-2.cdn.hygraph.com/content/cm41r4wse01zd07ui3rdnzpbw/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: {
          title,
        },
      }),
    }
  );

  const json = await response.json();
  return json;
};
