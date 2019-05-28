echo List users
var=$(curl --request GET \
  --url http://localhost:3000/api/v1/user/list)

echo Create user
curl --request POST \
  --url http://localhost:3000/api/v1/user/new \
  --header 'content-type: application/json' \
  --data '{
	"firstName":"firstName",
	"lastName":"lastName",
	"email":"email@mail.com",
	"password":"password"
}'

echo Read user
curl --request GET \
  --url http://localhost:3000/api/v1/user/5ceaab7d8e1f5b250ce77429

echo Update user
curl --request PUT \
--url http://localhost:3000/api/v1/user/5ceaab7d8e1f5b250ce77429 \
--header 'content-type: application/json' \
--data '{
"password":"new password"
}'

echo Delete user
curl --request DELETE \
  --url http://localhost:3000/api/v1/user/5ceaab7d8e1f5b250ce77429 \
  --header 'content-type: application/json' \
  --data '{
	"password":"new password"
}'