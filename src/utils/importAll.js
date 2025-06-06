function importAll(r) {
  return r.keys().map(r);
}

const gymLikeImages = importAll(
  require.context(
    "../assets/images/projects/gymlike",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const gpt3Images = importAll(
  require.context("../assets/images/projects/gpt3", false, /\.(png|jpe?g|svg)$/)
);

const smartQuizAppImages = importAll(
  require.context(
    "../assets/images/projects/smartQuizApp",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const hackerNewsCloneImages = importAll(
  require.context(
    "../assets/images/projects/hackerNewsClone",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const avitoCloneImages = importAll(
  require.context(
    "../assets/images/projects/avitoClone",
    false,
    /\.(png|jpe?g|svg)$/
  )
)

export { gymLikeImages, gpt3Images, smartQuizAppImages, hackerNewsCloneImages, avitoCloneImages };
