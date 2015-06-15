#pragma strict
var PauseCanvas : Canvas;

function Start () {

}

function Update ()
{
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		PauseCanvas.enabled = true;
		Time.timeScale = 0;
		Screen.lockCursor = false;
		Cursor.visible = true;
	}
}

function ResumeGame () 
{
	PauseCanvas.enabled = false;
		Time.timeScale = 1;
		Screen.lockCursor = true;
		Cursor.visible = false;

}
