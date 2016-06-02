
for (var i=2; i<20; i++)
{

	iimSet ("STEP", i);

	//BDSM
	iimPlay("Suzy/bdsm");
	iimPlay("CODE:WAIT SECONDS=60");


	//WEBCAM
	iimPlay("Suzy/webcam");
	iimPlay("CODE:WAIT SECONDS=60");			
		

	iimPlay("CODE:WAIT SECONDS=150");

}
