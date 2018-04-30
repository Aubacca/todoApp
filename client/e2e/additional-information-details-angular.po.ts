import { browser, by, element } from "protractor";

export class additionalInformationDetailsAngularPo {
  get = function() {
    browser.get("");
  };

  taskDataRequestDetailsRequestNumberLink = element(
    by.exactBinding(" taskData.requestDetails.requestNumber | markEmpty ")
  );

  taskDataRequestDetailsRequestReason = element(
    by.exactBinding(" taskData.requestDetails.requestReason | markEmpty ")
  );

  taskDataRequestDetailsRequestTypeName = element(
    by.exactBinding(" taskData.requestDetails.requestType?.name | markEmpty ")
  );

  taskDataRequestDetailsRequestPriorityLabel = element(
    by.exactBinding(
      " taskData.requestDetails.requestPriority?.label | markEmpty "
    )
  );

  taskDataDetailViewCountry = element(
    by.exactBinding(" taskData.detailView?.country | markEmpty ")
  );

  taskDataRequestDetailsRequestPhaseLabel = element(
    by.exactBinding(" taskData.requestDetails.requestPhase?.label | markEmpty ")
  );

  taskDataDetailViewTargetBoADeploymentDate = element(
    by.exactBinding(
      " taskData.detailView?.targetBoADeploymentDate | rocheDate | markEmpty "
    )
  );

  taskDataRequestDetailsRequestStatusLabel = element(
    by.exactBinding(
      " taskData.requestDetails.requestStatus?.label | markEmpty "
    )
  );

  clickFgMaterialNumberLink = function(rowIndex1) {
    this.taskDataRelatedFgs
      .get(rowIndex1)
      .element(by.exactBinding(" fg.materialNumber "))
      .click();
  };

  clickPpmMaterialNumberLink = function(rowIndex1) {
    this.taskDataRelatedPpms
      .get(rowIndex1)
      .element(by.exactBinding(" ppm.materialNumber "))
      .click();
  };
}
