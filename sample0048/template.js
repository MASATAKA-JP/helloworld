function searchElement($searchArray, $searchElement){
  if( $searchArray.indexOf( $searchElement ) == -1){
    document.write('「' + $searchElement + '」は、見つかりませんでした。<br />');
  } else {
    document.write('「' + $searchElement + '」は、見つかりました。<br />');
  }
}
var $sampleArray = new Array('要素１', '要素２', '要素３', '要素４', '要素５');
searchElement($sampleArray, '要素３');
searchElement($sampleArray, '要素６');
