var module = angular.module('example', ['cl.staffSchedule']);

module.controller('ExampleCtrl', ['$scope', function($scope) {
  $scope.staffScheduleOptions = {
    weekdays: [{
      name: 'Mon',
      timeSlots: [{
        name: '05',
        class: '',
        users: []
      },
      {
        name: '06',
        class: 'entry',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '07',
        class: 'entry',
        users: ['Youchra']
      },
      {
        name: '08',
        class: 'entry',
        users: ['Papschachtel']
      },
      {
        name: '09',
        class: 'entry',
        users: ['OberstK']
      },
      {
        name: '10',
        class: 'entry',
        users: ['Mindmesser']
      },
      {
        name: '11',
        class: '',
        users: []
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: '',
        users: []
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: '',
        users: []
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: '',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: '',
        users: []
      }]
    }, {
      name: 'Tues',
      timeSlots: [{
        name: '05',
        class: '',
        users: []
      },
      {
        name: '06',
        class: '',
        users: []
      },
      {
        name: '07',
        class: '',
        users: []
      },
      {
        name: '08',
        class: '',
        users: []
      },
      {
        name: '09',
        class: '',
        users: []
      },
      {
        name: '10',
        class: '',
        users: []
      },
      {
        name: '11',
        class: '',
        users: []
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: 'entry',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: '',
        users: []
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: '',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: '',
        users: []
      }]
    }, {
      name: 'Wed',
      timeSlots: [{
        name: '05',
        class: '',
        users: []
      },
      {
        name: '06',
        class: 'entry',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '07',
        class: '',
        users: []
      },
      {
        name: '08',
        class: '',
        users: []
      },
      {
        name: '09',
        class: '',
        users: []
      },
      {
        name: '10',
        class: '',
        users: []
      },
      {
        name: '11',
        class: '',
        users: []
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: '',
        users: []
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: 'entry',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: '',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: '',
        users: []
      }]
    }, {
      name: 'Thu',
      timeSlots: [{
        name: '05',
        class: 'entry',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '06',
        class: ['entry', 'absence'],
        users: [['Youchra, Papschachtel'], ['Mindmesser, OberstK']]
      },
      {
        name: '07',
        class: '',
        users: []
      },
      {
        name: '08',
        class: '',
        users: []
      },
      {
        name: '09',
        class: '',
        users: []
      },
      {
        name: '10',
        class: 'absence',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '11',
        class: 'absence',
        users: ['Youchra', 'Mindmesser']
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: '',
        users: []
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: '',
        users: []
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: '',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: '',
        users: []
      }]
    }, {
      name: 'Fri',
      timeSlots: [{
        name: '05',
        class: '',
        users: []
      },
      {
        name: '06',
        class: '',
        users: []
      },
      {
        name: '07',
        class: '',
        users: []
      },
      {
        name: '08',
        class: '',
        users: []
      },
      {
        name: '09',
        class: '',
        users: []
      },
      {
        name: '10',
        class: '',
        users: []
      },
      {
        name: '11',
        class: '',
        users: []
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: '',
        users: []
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: '',
        users: []
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: '',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: '',
        users: []
      }]
    }, {
      name: 'Sat',
      timeSlots: [{
        name: '05',
        class: '',
        users: []
      },
      {
        name: '06',
        class: '',
        users: []
      },
      {
        name: '07',
        class: '',
        users: []
      },
      {
        name: '08',
        class: '',
        users: []
      },
      {
        name: '09',
        class: '',
        users: []
      },
      {
        name: '10',
        class: '',
        users: []
      },
      {
        name: '11',
        class: '',
        users: []
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: '',
        users: []
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: '',
        users: []
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: '',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: '',
        users: []
      }]
    }, {
      name: 'Sun',
      timeSlots: [{
        name: '05',
        class: '',
        users: []
      },
      {
        name: '06',
        class: '',
        users: []
      },
      {
        name: '07',
        class: '',
        users: []
      },
      {
        name: '08',
        class: '',
        users: []
      },
      {
        name: '09',
        class: '',
        users: []
      },
      {
        name: '10',
        class: '',
        users: []
      },
      {
        name: '11',
        class: '',
        users: []
      },
      {
        name: '12',
        class: '',
        users: []
      },
      {
        name: '13',
        class: '',
        users: []
      },
      {
        name: '14',
        class: '',
        users: []
      },
      {
        name: '15',
        class: '',
        users: []
      },
      {
        name: '16',
        class: '',
        users: []
      },
      {
        name: '17',
        class: 'absence',
        users: []
      },
      {
        name: '18',
        class: '',
        users: []
      },
      {
        name: '19',
        class: '',
        users: []
      },
      {
        name: '20',
        class: 'entry',
        users: []
      },
      {
        name: '21',
        class: '',
        users: []
      },
      {
        name: '22',
        class: '',
        users: []
      },
      {
        name: '23',
        class: '',
        users: []
      },
      {
        name: '00',
        class: '',
        users: []
      },
      {
        name: '01',
        class: '',
        users: []
      },
      {
        name: '02',
        class: '',
        users: []
      },
      {
        name: '03',
        class: '',
        users: []
      },
      {
        name: '04',
        class: 'absence',
        users: []
      }]
    }]
  };
}]);
