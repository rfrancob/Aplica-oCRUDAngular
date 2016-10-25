var app = angular.module("App", ["firebase"]);
 

app.controller("CtrlUsuario", function ($scope, $window, $firebaseArray) {
    $scope.secondClick = false;
    $scope.btnEdit = "Editar";
    
  //Conexão com Firebase  
    var ref = new Firebase("https://crudangular-ad353.firebaseio.com/Usuario");
    
    $scope.usuarios = $firebaseArray(ref);
    
    
    $scope.clearPage = function () {
        $scope.usuarioForm = null;
    };
    
    $scope.orderByFunction = function (usuario) {
        return parseInt(usuario.USER_CODE);
    };
    
    $scope.addUsuario = function (usuarioForm) {
        $scope.usuarios.$add(usuarioForm);
        $window.alert("Usuário Salvo: " + usuarioForm.USER_NOME);
        $scope.clearPage();
    };
    
    $scope.deleteUsuario = function (usuarioForm) {
        $scope.usuarios.$remove(usuarioForm);
        $window.alert("Usuário Deletado: " + usuarioForm.USER_NOME);
    };
    
    $scope.editUsuario = function (usuario, usuarioForm) {
        if (!$scope.secondClick) {
            $scope.usuarioForm = usuario;
            $scope.secondClick = true;
            $scope.btnEdit = "Salvar";
            $window.alert("Edite os dados do usuário acima");
        } else {
            $scope.usuarios.$remove(usuario);
            $scope.usuarios.$add($scope.usuarioForm);
            $window.alert("Usuário Atualizado: " + $scope.usuarioForm.USER_NOME);
            $scope.secondClick = false;
            $scope.btnEdit = "Editar";
            $scope.clearPage();
        }
    };
});

app.controller("CtrlGranja", function ($scope, $window, $firebaseArray) {
    $scope.secondClick = false;
    $scope.btnEdit = "Editar";
    
    //Conexão com o Banco
    var refGranja = new Firebase("https://crudangular-ad353.firebaseio.com/Granja");
    $scope.granjas = $firebaseArray(refGranja);
    $scope.clearPage = function () {
        $scope.granjaForm = null;
    };
    
    $scope.orderByFunction = function (granja) {
        return parseInt(granja.GRANJ_CODE);
    };
    
    //adicionar granja no array firebase
    $scope.addGranja = function (granjaForm) {
        $scope.granjas.$add(granjaForm);
        $window.alert("Granja Salva: " + granjaForm.GRANJ_NOME);
        $scope.clearPage();
    };
    
    $scope.deleteGranja = function (granjaForm) {
        $scope.granjas.$remove(granjaForm);
        $window.alert("Granja Deletada: " + granjaForm.GRANJ_NOME);
    };
    
    $scope.editGranja = function (granja, granjaForm) {
        if (!$scope.secondClick) {
            $scope.granjaForm = granja;
            $scope.secondClick = true;
            $scope.btnEdit = "Salvar";
            $window.alert("Edite os dados da granja acima");
        } else {
            $scope.granjas.$remove(granja);
            $scope.granjas.$add($scope.granjaForm);
            $window.alert("Granja Atualizada: " + $scope.granjaForm.GRANJ_NOME);
            $scope.secondClick = false;
            $scope.btnEdit = "Editar";
            $scope.clearPage();
        }
    };
});

app.controller("CtrlRaca", function ($scope, $window, $firebaseArray) {
    $scope.secondClick = false;
    $scope.btnEdit = "Editar";
    
    //Conexão com o Banco
    var refRaca = new Firebase("https://crudangular-ad353.firebaseio.com/Raca");
    $scope.racas = $firebaseArray(refRaca);
    $scope.clearPage = function () {
        $scope.racaForm = null;
    };
    
    $scope.orderByFunction = function (raca) {
        return parseInt(raca.RACA_CODE);
    };
    
    //adicionar raça no array firebase
    $scope.addRaca = function (racaForm) {
        $scope.racas.$add(racaForm);
        $window.alert("Raça Salva: " + racaForm.RACA_NOME);
        $scope.clearPage();
    };
    
    $scope.deleteRaca = function (racaForm) {
        $scope.racas.$remove(racaForm);
        $window.alert("Raça Deletada: " + racaForm.RACA_NOME);
    };
    
    $scope.editRaca = function (raca, racaForm) {
        if (!$scope.secondClick) {
            $scope.racaForm = raca;
            $scope.secondClick = true;
            $scope.btnEdit = "Salvar";
            $window.alert("Edite os campos acima");
       
        } else {
            $scope.racas.$remove(raca);
            $scope.racas.$add($scope.racaForm);
            $window.alert("Raça Atualizada: " + $scope.racaForm.RACA_NOME);
            $scope.secondClick = false;
            $scope.btnEdit = "Editar";
            $scope.clearPage();
        }
    };
});

app.controller("CtrlAve", function ($scope, $window, $firebaseArray) {
    $scope.secondClick = false;
    $scope.btnEdit = "Editar";
    
    //Conexão com o Banco
    var refAve = new Firebase("https://crudangular-ad353.firebaseio.com/Ave");
    $scope.aves = $firebaseArray(refAve);
    $scope.clearPage = function () {
        $scope.aveForm = null;
    };
    
    $scope.orderByFunction = function (ave) {
        return parseInt(ave.AVE_CODE);
    };
    
    //adicionar raça no array firebase
    $scope.addAve = function (aveForm) {
        $scope.aves.$add(aveForm);
        $window.alert("Ave Salva: " + aveForm.AVE_NOME);
        $scope.clearPage();
    };
    
    $scope.deleteAve = function (aveForm) {
        $scope.aves.$remove(aveForm);
        $window.alert("Ave Deletada: " + aveForm.AVE_NOME);
    };
    
    $scope.editAve = function (ave, aveForm) {
        if (!$scope.secondClick) {
            $scope.aveForm = ave;
            $scope.secondClick = true;
            $scope.btnEdit = "Salvar";
            $window.alert("Edite os dados da ave acima");
        } else {
            $scope.aves.$remove(ave);
            $scope.aves.$add($scope.aveForm);
            $window.alert("Ave Atualizada: " + $scope.aveForm.AVE_NOME);
            $scope.secondClick = false;
            $scope.btnEdit = "Editar";
            $scope.clearPage();
        }
    };
});