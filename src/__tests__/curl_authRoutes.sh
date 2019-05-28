echo Register user
curl --request POST \
  --url http://localhost:3000/api/v1/auth/register \
  --header 'content-type: application/json' \
  --data '{
	"firstName":"firstName",
	"lastName":"lastName",
	"email":"email@mail.com",
	"password":"password"
}'

echo Login user
curl --request POST \
  --url http://localhost:3000/api/v1/auth/login \
  --header 'content-type: application/json' \
  --data '{
	"email":"email@mail.com",
	"password":"password"
}'