const pieces = [
 "2, 5, 4, 0",
 "2, 1, 4, 2",
 "0, 1, 1, 0",
 "4, 4, 0, 3",
 "0, 0, 4, 3",
 "0, 0, 1, 1",
 "1, 4, 0, 0",
 "4, 4, 3, 5",
 "5, 5, 2, 4",
 "1, 1, 0, 5",
 "4, 1, 0, 4",
 "1, 0, 2, 4",
 "3, 5, 1, 2",
 "1, 4, 2, 0",
 "0, 1, 5, 2",
 "1, 5, 0, 4"
];

//Setting empty arrays to push the values that we want inside
const corners = [];
const edges = [];
const middle =[];

//Checking the cases where we have zeros. Cases with 2 zeros are the ones in the corner, cases with 1 zero are the ones on the edges(in between the corners) and the cases with no zeros are the ones in the middle.
pieces.forEach((piece) => {
  const zeros = piece.split("0").length - 1;
  switch (zeros) {
    case 0:
      middle.push(piece);
      break;
    case 1:
      edges.push(piece);
      break;
    case 2:
      corners.push(piece);
      break;
  }
});

//Setting functions that instead of giving us the strings, return the index of them in the main array

function getIndexOfCorners(){
for(var i = 0; i < corners.length; i++){
  console.log(pieces.indexOf(corners[i])+ 1);
}
}

function getIndexOfEdges(){
for (var i = 0; i < edges.length; i++) {
  console.log(pieces.indexOf(edges[i]) + 1);
}
}

function getIndexOfMiddle(){
for (var i = 0; i < middle.length; i++) {
  console.log(pieces.indexOf(middle[i]) + 1);
}
}

//Calling this functions will log the index of 
getIndexOfCorners();
getIndexOfEdges();
getIndexOfMiddle();




