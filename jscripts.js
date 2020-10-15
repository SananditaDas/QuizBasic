
var questionList=$(".question");

$(".startButton").click(function(){
  $(".startButton").addClass("makeClear");
  $(questionList[0]).removeClass("makeClear");

});

for(var i=0;i<questionList.length;i++)
{
  addClear(i);
}

function addClear(i)
{
  var q=".q"+i+" .option";
  $(q).click(function(){

    if($(".next").hasClass("makeClear")==true)
    {
      if($(this).hasClass("option1")==true)
      {
        $(".correct").removeClass("makeClear");
      }
      else
      {
        $(".wrong").removeClass("makeClear");
      }
      $(".next").removeClass("makeClear");

      $(".next").click(function(){
        $(questionList[i]).addClass("makeClear");
        $(".mssg").addClass("makeClear");
        $(".next").addClass("makeClear");
        $(questionList[i+1]).removeClass("makeClear");

        if(i==questionList.length-1)
        $(".end").removeClass("makeClear");
      });
    }

  });
}
