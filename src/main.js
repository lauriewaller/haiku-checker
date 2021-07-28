import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { checkLinesOneAndThree, checkLineTwo} from './js/verification';


$("#submit").click(function(event){
  event.preventDefault();
  const line1 = $("#line1").val();
  const line2 = $("#line2").val();
  const line3 = $("#line3").val();

  console.log(line1);
  if ((checkLinesOneAndThree(line1)) && (checkLineTwo(line2)) && (checkLinesOneAndThree(line3))) {
    return $(".showResult").text("This is a haiku!");
    } else {
      return $(".showResult").text("This is NOT a haiku!");
    }
});







