import { browser, by, element } from 'protractor';

export class AdditionalInformationDetails {
  taskDataRequestDetailsRequestNumberLink = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-5 > div:nth-of-type(2) > a'
    )
  );

  taskDataRequestDetailsRequestReason = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-5 > div:nth-of-type(4)'
    )
  );

  taskDataRequestDetailsRequestTypeName = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-5 > div:nth-of-type(6)'
    )
  );

  taskDataRequestDetailsRequestPriorityLabel = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-4 > div:nth-of-type(2)'
    )
  );

  taskDataDetailViewCountry = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-4 > div:nth-of-type(4)'
    )
  );

  taskDataRequestDetailsRequestPhaseLabel = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-4 > div:nth-of-type(6)'
    )
  );

  taskDataDetailViewTargetBoADeploymentDate = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-3 > div:nth-of-type(2)'
    )
  );

  taskDataRequestDetailsRequestStatusLabel = element(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.col-md-3 > div:nth-of-type(4)'
    )
  );

  taskDataRelatedFgs = element.all(
    by.css(
      'div > div.mb-4 > div.row > div.col-12.mt-3 > div:nth-of-type(2) > div > span'
    )
  );

  taskDataRelatedPpms = element.all(
    by.css(
      'div > div.mb-4 > div.row > div.col-12:nth-of-type(5) > div:nth-of-type(2) > div > span'
    )
  );

  get = function() {
    browser.get('');
  };

  clickFgMaterialNumberLink = function(rowIndex1) {
    this.taskDataRelatedFgs
      .get(rowIndex1)
      .element(by.css('a'))
      .click();
  };

  clickPpmMaterialNumberLink = function(rowIndex1) {
    this.taskDataRelatedPpms
      .get(rowIndex1)
      .element(by.css('a'))
      .click();
  };
}
