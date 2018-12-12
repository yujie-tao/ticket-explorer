 $( function() {
		var airports = [
			"TYS", "LGA", "PBI", "BOS", "GUM", "OGG", "GEG", "CVG", "DCA", "PNS", "LGB", "ORF", "RDU", "DTW", "OAK", "MSN", "LAX", "KOA", "IAH", "MIA", "LIH", "SAT", "PVD", "DFW", "GRR", "MKE", "SAN", "DEN", "JFK", "BUF", "TUL", "ALB", "GSO", "SFB", "SJU", "ICT", "SFO", "EWR", "FLL", "HOU", "IND", "SAV", "DAY", "TPA", "STL", "JAX", "HNL", "MDW", "ANC", "BHM", "PSP", "PWM", "LAS", "ABQ", "OMA", "PHX", "CLE", "MYR", "ELP", "SEA", "RIC", "ROC", "BUR", "AUS", "BNA", "PDX", "ONT", "PHL", "CHS", "BDL", "MSP", "SNA", "MHT", "MCI", "MEM", "BOI", "SLC", "PIT", "HPN", "PIE", "TUS", "LIT", "ATL", "IAD", "DSM", "SJC", "RSW", "SMF", "BWI", "OKC", "MCO", "GSP", "SYR", "CMH", "RNO", "ORD", "MSY", "CLT", "SDF"
		];

		var airlines = [
			"AeroMéxico", "Arkefly", "Delta Air Lines", "Iberia Airlines", "Qatar Airways", "TAM Brazilian Airlines", "Virgin Atlantic Airways", "Allegiant Air", "Alitalia", "China Airlines", "Frontier Airlines", "Air New Zealand", "AirTran Airways", "Etihad Airways", "Japan Airlines", "Sun Country Airlines", "Turkish Airlines", "Virgin Australia", "Air France", "Aer Lingus", "Copa Airlines", "Hawaiian Airlines", "Lufthansa", "Spirit Airlines", "Virgin America", "Silver Airways (3M)", "American Airlines", "Alaska Airlines", "British Airways", "Finnair", "JetBlue Airways", "Singapore Airlines", "United Airlines", "WestJet", "KLM Royal Dutch Airlines", "Southwest Airlines", "US Airways", "Island Air (WP)"
			];


		var genders = [
				"Male", "Female", "Other"
		];
		
		$( "#sell-arrPort" ).autocomplete({
			source: airports
		});

		$( "#sell-dePort" ).autocomplete({
			source: airports
		});

		$( "#sell-aname" ).autocomplete({
			source: airlines
		});

		$( "#sell-gender" ).autocomplete({
			source: genders
		});
	});