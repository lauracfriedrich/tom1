
const experiment = {
  1: {
    intro: "FB1_Introduction.mp4",

    trials: [
      "FB1_Control1_Jugglingclub.mp4",
      "FB1_Test4_Bottles.mp4",
      "FB1_Test1_Pencil.mp4",
      "FB1_Control2_Hulahoop.mp4"
    ],

    end: "FB1_End.mp4"
  },

  2: {
    intro: "FB1_Introduction.mp4",

    trials: [
      "FB1_Practice1_Hats.mp4",
      "FB1_Test3_Lightbulb.mp4",
      "FB1_Test2_Hideandseek.mp4",
      "FB1_Practice2_Popcorn.mp4"
    ],

    end: "FB1_End.mp4"
  }
};

export function getTrialImages(videoName) {
  const baseName = videoName.replace(".mp4", "");

  return [1, 2, 3].map(number => ({
    label: String(number),
    src: `/images/${baseName}_${number}.png`
  }));
}


export default experiment;