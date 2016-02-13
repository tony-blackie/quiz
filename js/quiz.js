(function(){
	"use strict";

	angular
		.module('myQuiz', [])
		.controller('QuizController', QuizController);

	QuizController.$inject = ['$scope', '$http', '$sce'];

	function QuizController($scope, $http, $sce) {
		var vm = this;

		vm.score = 0;
		vm.activeQuestion = -1;
		vm.activeQuestionAnswered = 0;
		vm.percentage = 0;

		$http.get('quiz_data.json').then(function(quizData) {
			vm.myQuestions = quizData.data;
			vm.totalQuestions = vm.myQuestions.length;
		});
	}
})();