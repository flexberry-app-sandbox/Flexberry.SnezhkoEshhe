docker build --no-cache -f SQL\Dockerfile.PostgreSql -t snezhko_eshhe-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t snezhko_eshhe-java/app ../../..
