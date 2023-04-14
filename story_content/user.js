function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Y5OVvbSEDG":
        Script1();
        break;
      case "6dqshBfzKXy":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwX9VyMFjpew0JCR2KL71WceA63KqIqaNt5S4LmvRcxfm60yAQlGehV0LfbUHzQGe5f/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect"),q3attempts:player.GetVar("q3attempts"),q3answeredcorrect:player.GetVar("q3answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbwX9VyMFjpew0JCR2KL71WceA63KqIqaNt5S4LmvRcxfm60yAQlGehV0LfbUHzQGe5f/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect"),q3attempts:player.GetVar("q3attempts"),q3answeredcorrect:player.GetVar("q3answeredcorrect")})
	}
	)
}

