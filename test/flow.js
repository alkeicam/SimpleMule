
var sm = require('..');

exports['create flow'] = function (test) {
    var flow = sm.flow();
    
    test.ok(flow);
    test.equal(typeof flow, 'object');
    test.done();
}

exports['simple send'] = function (test) {
    var flow = sm.flow();

    test.equal(1, flow.send(1));
    test.done();
}

exports['send to flow with transform'] = function (test) {
    var flow = sm.flow();
    flow.transform(function (payload) { return payload + 1; });

    test.equal(2, flow.send(1));
    test.done();
}
