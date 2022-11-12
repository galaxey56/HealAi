from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def score(req):
    if req.method=='POST':
        print(req.data)
    return Response({"boy":"Hello boy"})