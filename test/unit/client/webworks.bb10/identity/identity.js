/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
describe("webworks identity", function () {
    var identity = ripple('platform/webworks.bb10/1.0.0/identity'),
        deviceSpec = ripple('platform/webworks.bb10/1.0.0/spec/device'),
        deviceSettings = ripple('deviceSettings');

    describe("using server/identity", function () {
        describe("uuid", function () {
            it("has a correlative device setting", function () {
                expect(typeof deviceSpec.identity.uuid).toEqual("object");
                expect(typeof deviceSpec.identity.uuid.name).toEqual("string");
                expect(deviceSpec.identity.uuid.control.type).toEqual("text");
                expect(typeof deviceSpec.identity.uuid.control.value).toEqual("string");
            });

            it("returns a persisted device setting", function () {
                spyOn(deviceSettings, "retrieve").andReturn("wine");
                expect(identity.uuid).toEqual("wine");
            });
        });
    });
});
