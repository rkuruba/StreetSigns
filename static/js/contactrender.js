var contactrender = {

    build: function () {

        contactrender.addEventSubmit();
    },

    addEventSubmit: function () {

        var sendMessageFormContainer = document.getElementById('sendMessageFormContainer');

        var button = sendMessageFormContainer.getElementsByTagName('button')[0];

        button.onclick = function () {

            var request = contactrender.getInput();

            if (request != false) {

                shinobi.notification.notification.info('Thanks for the suggestions ' +
                    request.name + '. Wishing ' +
                    request.name + ' a good day.');
            }
        }
    },

    getInput: function () {

        var sendMessageFormContainer = document.getElementById('sendMessageFormContainer');

        var listInput = sendMessageFormContainer.querySelectorAll('[snb-key]');

        var request = {};

        for (var i = 0; i < listInput.length; i++) {

            if (listInput[i].value.trim() == '') {

                shinobi.notification.notification.error('Please enter full information');

                listInput[i].classList.add('is-danger');

                return false;
            } else {

                listInput[i].classList.remove('is-danger');

                var key = listInput[i].getAttribute('snb-key');

                request[key] = listInput[i].value.trim();

            }
        }

        return request;
    },
};