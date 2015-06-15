#pragma strict
var PauseCanvas : Canvas;

function Start () {

}




function ResumeGame () 
{
	PauseCanvas.enabled = false;
		Time.timeScale = 1;
		Screen.lockCursor = true;
		Cursor.visible = false;

}
