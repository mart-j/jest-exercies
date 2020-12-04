export const autoGraderAbstraction = (grade: number, winner: (grade: number) => {}) => {
  switch (true) {
    case grade === 100:
      winner(grade);
      break;
  }
};
