export function createConfidence(result){


return {


classification:
result.type,


score:
result.confidence,


level:

result.confidence >=90

?

"HIGH"

:

"MEDIUM"


};


}