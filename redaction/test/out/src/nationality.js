"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   nationality.ts                                     :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/18 16:30:41 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 16:37:18 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactNationality = void 0;
function redactNationality(cv) {
    // const nationality = /nationality[:.,;]?[^,.:;]*/gi;
    var nationality = /nationality:\s\w+/gi;
    cv = cv.replace(nationality, 'Nationality: redacted');
    return (cv);
}
exports.redactNationality = redactNationality;
