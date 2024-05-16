angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
				Id: 0,
				Name: "Mohammad Attoun",
				Photo: "me.jpg",
				Quote: "General information about myself",
				Age: 23,
				Family: "A mother and father and 2 Brother",
				Location: "Amman",
				Character: "Friendly",
				
				PersonalityTraits: [
					{ Name: "Social/spontaneous", Value: 95 },
					{ Name: "Analytical/Creative", Value: 88 },
					{ Name: "Passive/Active", Value: 85 }
				], 
				
				Career : ["Student in mutah university", "I study computer information systems", "I am in my graduation year"],
				
				 Goals: ["To become excellent at programming", "To get a job in an international programming company", "I would like to have my own programming company",],
				
			    	Motivations: [
					{ Name: "Celebrate Small Wins", Value: 85 },
					{ Name: "Setting Goals", Value: 90 },
					{ Name: "Achievement", Value: 95 },
					{ Name: "Continuous Learning", Value: 100 },
					{ Name: "Power", Value: 100 },
					{ Name: "Social", Value: 90 },
					{Name: "Time Management", Value: 100}
				], 
				
			},
			
		];
		$scope.model = $scope.Personas[0];

	}])