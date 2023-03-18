
FROM denoland/deno:1.31.1

WORKDIR /gmc
COPY main.js .

EXPOSE 7000

CMD ["run", "--allow-net", "main.js"]
