
$(document).ready(function() {
	
	common_onready();
	
	
	$('body').animate({opacity: 1}, 800);
	
	$('form').submit(false);
	
	
$('#coursecode').typeahead({source : availableTags ,minLength : 3, updater : function(e)
		{
			
			
			return e.split(" ")[0];
	
		} 
		
		
		

});


$('#coursecode').attr('title', "Type your Course Code here");
$('#nostu').attr('title', "The number ofstudents enrolled in this coursestudents enrolled in this coursestudents enrolled in this course");

$('input').tooltip({placement : "right"});





});






availableTags=["TMC1013 - System Analysis and Design|TMC1013",  "TMC1014 - System   Analysis and Design|TMC1014", "TMC1213 - Computer Architecture|TMC1213", "TMC1214 - Computer  Architecture and Organisation|TMC1214", "TMC1233 - Operating Systems|TMC1233", "TMC1234 - Operating Systems|TMC1234", "TMC1253 - Communication and Computer   Network|TMC1253", "TMC1254 - Communication and Computer Network|TMC1254", "TMC1413 - Introduction to Programming|TMC1413",   "TMC1414 - Principles of Computing|TMC1414", "TMC1433 -  Data Structure and Algorithms|TMC1433", "TMC1434 - Data Structure and   Algorithms|TMC1434", "TMC1813 - Discrete  Mathematics|TMC1813", "TMC1814 - Discrete Structures|TMC1814", "TMC1832 - Calculus|TMC1832", "TMC1833 - Calculus|TMC1833", "TMC1852 - Linear Algebra|TMC1852", "TMC1853 - Linear Algebra|TMC1853", "TMC1874 -   Mathematics for  Computing|TMC1874", "TMC2013 - Visual Computing|TMC2013", "TMC2033 - Database Concept and Design|TMC2033",   "TMC2034  - Database Concept and Design|TMC2034", "TMC2053 - E-Commerce Application|TMC2053", "TMC2214 - Computer Security|TMC2214", "TMC2413 - Object Oriented Software Development|TMC2413", "TMC2434 - Software Engineering and Application    Development|TMC2434", "TMC2454 - Intelligent Systems|TMC2454", "TMC2654 - Web Based System Development|TMC2654",  "TMC2813 -   Introductory Statistics|TMC2813", "TMC3012 - Ethics and Professionalism|TMC3012", "TMC3034 -  Productisation and   Technopreneurship|TMC3034", "TMC3613 - Web Based System Development|TMC3613", "TMC4013 -  Technopreneurship and Product   Development|TMC4013", "TMC5534 - Distributed Computing|TMC5534", "TMC5554 - Multi- agent Systems|TMC5554", "TMC5574 - Web   Technologies|TMC5574", "TMC6014 - Decision Support Systems|TMC6014",  "TMC6034 - Information Infrastructure|TMC6034", "TMC6054 -   Object Oriented Application Development|TMC6054",  "TMC6094 - Multimedia Communications|TMC6094", "TMC6174 - Intelligent   Systems|TMC6174", "TMC6214 - Computer  Security|TMC6214", "TMC6234 - Advanced Databases|TMC6234", "TMC6254 - Mobile Computing|TMC6254", "TMC6414 -  Quantitative Methods|TMC6414", "TMC6434 - Grid Computing|TMC6434", "TMC6454 - Computational Linguistics|TMC6454",  "TMC6494 - Image Processing and Analysis|TMC6494", "TMC6514 - Advanced Software Engineering|TMC6514", "TME1013 -    Introduction to Software Engineering|TME1013", "TME1033 - Introduction to Artificial Intelligence Systems|TME1033",  "TME2013 -   Software Engineering and Application Development|TME2013", "TME2033 - Object-Oriented Software  Development|TME2033", "TME2053 -   Knowledge Based System|TME2053", "TME2073 - Intelligent Systems|TME2073", "TME2093  - Domain and Requirement Analysis|TME2093",   "TME2113 - Logic Programming|TME2113", "TME3013 - Domain and  Requirement Analysis|TME3013", "TME3033 - Expert Systems|TME3033",   "TME4013 - Formal Methods|TME4013", "TME4033 -  Software Quality|TME4033", "TME4093 - Advanced Topics in Software Engineering|TME4093", "TMI1013 - Introduction to  Information Systems|TMI1013", "TMI2053 - Information Systems in Organisations|TMI2053",   "TMI2073 - Advanced  Database Management Systems|TMI2073", "TMI3033 - Strategic Information Systems|TMI3033", "TMI3053 - Human   Computer  Interaction|TMI3053", "TMI3073 - Human Centered Technology|TMI3073", "TMI3113 - Technopreneurship and Product    Development|TMI3113", "TMI4013 - Data Mining|TMI4013", "TMI4033 - Collective Intelligence|TMI4033", "TMI4093 -  Advanced Topics   in Information Systems|TMI4093", "TMM5034 - Network Technologies|TMM5034", "TMM5054 - Principles of  Software Engineering|TMM5054", "TMM5074 - Multimedia Technologies|TMM5074", "TMM5094 - Knowledge Management|TMM5094", "TMM5114 - IT Policy and   Strategy|TMM5114", "TMM5134 - Community Informatics|TMM5134", "TMM5154 - Human  Computer Interaction|TMM5154", "TMM5174 -   Technopreneurship|TMM5174", "TMM5194 - Emerging Technologies|TMM5194",  "TMM5214 - Information and Resource Management|TMM5214",   "TMM5234 - Natural Science Computing|TMM5234", "TMM5254 -  Industrial Design|TMM5254", "TMN1013 - Introduction to Computer   Technologies|TMN1013", "TMN2013 - Microcomputer  Interfacing|TMN2013", "TMN2053 - System Programming|TMN2053", "TMN2073 -   Computer Security|TMN2073", "TMN2093 -  Computer System Administration and Management|TMN2093", "TMN3013 - Distributed System|TMN3013", "TMN3033 - Network  Performance and Simulation|TMN3033", "TMN3053 - System Programming|TMN3053", "TMN3073 - Wireless   Networks|TMN3073",  "TMN4013 - Distributed System|TMN4013", "TMN4033 - Introduction to Embedded System|TMN4033", "TMN4053 -   Broadband  Network Technology|TMN4053", "TMN4073 - Wireless and Mobile Network|TMN4073", "TMN4093 - Advanced Topics in  Computer   Networking|TMN4093", "TMP1613 - Multimedia Technology|TMP1613", "TMP2013 - Information Systems  Laboratory|TMP2013", "TMP2113 -   Project Management|TMP2113", "TMP2213 - Internetworking Technology Laboratory|TMP2213", "TMP2413 - Software Engineering   Laboratory|TMP2413", "TMP2613 - Interactive Multimedia Laboratory|TMP2613", "TMP2634 - Multimedia Programming|TMP2634", "TMP2713   - Computational Science Laboratory|TMP2713",  "TMP2813 - Computational Science Laboratory|TMP2813", "TMP3012 - Final Year  Project  I|TMP3012", "TMP3034 - Final  Year Project II|TMP3034", "TMP3113 - Project Management|TMP3113", "TMP3213 -  Internetworking  Technology  Laboratory|TMP3213", "TMP3413 - Software Engineering Laboratory|TMP3413", "TMP3613 - Interactive  Multimedia   Laboratory|TMP3613", "TMP4013 - Information Systems Laboratory|TMP4013", "TMP4913 - Final Year Project I|TMP4913",   "TMP4935 -  Final Year Project II|TMP4935", "TMS1013 - Excursions in Modern Mathematics|TMS1013", "TMS2033 -  Differential Equations|TMS2033",  "TMS2073 - Statistical Data Analysis|TMS2073", "TMS2123 - Numerical Methods|TMS2123", "TMS2133 - Numerical Methods|TMS2133",  "TMS2153 - Multivariable Calculus|TMS2153", "TMS3033 - Operational  Research|TMS3033", "TMS3053 - Statistical Data  Analysis|TMS3053", "TMS3063 - Operational Research|TMS3063",  "TMS3073 - Parallel Processing|TMS3073", "TMS3093 - Mathematical  Modelling  and Simulation|TMS3093", "TMS4013 -  Parallel Processing|TMS4013", "TMS4093 - Advanced Topics in Computational  Science|TMS4093",  "TMT1013 - Web Design  and Technologies|TMT1013", "TMT2013 - Multimedia Programming|TMT2013", "TMT2033 -  Introduction to Computer   Graphics|TMT2033", "TMT2053 - Computer Game Design and Development|TMT2053", "TMT3013 - Web Based  System  Development|TMT3013",  "TMT3033 - Visualization and Image Processing|TMT3033", "TMT3053 - Computer Game Design and   Development|TMT3053", "TMT3073 -  Data Visualization|TMT3073", "TMT4053 - Multimodal Interaction Technology|TMT4053", "TMT4073 -  Digital Image Processing|TMT4073", "TMT4093 - Advanced Topics in Multimedia Computing|TMT4093", "TMX1010 - End User Computing|TMX1010", "TMX2012 - IT  Tools for Knowledge Workers|TMX2012", "TMY2908 -  Industrial Training|TMY2908", "TMY3912 - Industrial  Training|TMY3912", "SSX0012 - Islamic and Asian Civilisations|SSX0012"];