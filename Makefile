.PHONY: docker-tag
docker-tag:
	docker tag websocket-sample-$(target):latest us-central1-docker.pkg.dev/velvety-glazing-420809/websocket-sample-repo/websocket-sample-$(target):latest

.PHONY: docker-push
docker-push:
	docker push us-central1-docker.pkg.dev/velvety-glazing-420809/websocket-sample-repo/websocket-sample-$(target):latest

.PHONY: gcloud-deploy
gcloud-deploy:
	gcloud run services replace ./.infra/$(target).yaml --project=velvety-glazing-420809 --region=us-central1