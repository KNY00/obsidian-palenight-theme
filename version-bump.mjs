/**
 * Automated version bump script for Obsidian Palenight Theme.
 *
 * Synchronizes version numbers across package.json, manifest.json, and versions.json.
 * Triggered automatically by `npm version <newversion>` or runnable directly with `node version-bump.mjs`.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";

const targetVersion = process.env.npm_package_version;

// Read minAppVersion from manifest.json and bump version to target version
let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
const { minAppVersion } = manifest;

if (targetVersion) {
	manifest.version = targetVersion;
}
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t") + "\n");

// Update versions.json with target version and minAppVersion from manifest.json
let versions = existsSync("versions.json")
	? JSON.parse(readFileSync("versions.json", "utf8"))
	: {};

const finalVersion = targetVersion || manifest.version;
if (finalVersion && minAppVersion) {
	versions[finalVersion] = minAppVersion;
}
writeFileSync("versions.json", JSON.stringify(versions, null, "\t") + "\n");
