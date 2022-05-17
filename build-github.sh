ng build --base-href ./LNDF2022-Password-Interception-Demo
rm -r docs/*
cp -r dist/LNDFPasswordDemo/* docs/
git add docs/*
