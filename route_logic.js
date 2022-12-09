outlets = 4;
inlets = 1;

function msg_float(r){
		if(r >= 4.){
			r = 4.;
		}
		if(r <= 0.){
			r = 0.;
		}
		
		var out1 = 0.;
		var out2 = 0.;
		var out3 = 0.;
		var out4 = 0.;
		
		if(r <= 4. && r >= 3.){
			out4 = 1. - Math.abs(r - 4.);
			out3 = 4. - r;
		}else if(r < 3. && r >= 2.){
			out3 = 1. - Math.abs(r - 3.);
			out2 = 3. - r;
		}else if(r < 2. && r >= 1.){
			out2 = 1. - Math.abs(r - 2.);
			out1 = 2. - r;
		}
		outlet(0, out1);
		outlet(1, out2);
		outlet(2, out3);
		outlet(3, out4);
}